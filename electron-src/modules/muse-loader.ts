import os from "os";
import path from "path";
import fs from "fs/promises";

import * as mmd from "music-metadata";

import Module from "./module";
import { MuseMeta } from "../../shared/types/moth";

class MuseLoaderModule extends Module {
  private seekFolders: string[];
  private supportedFormats: string[];
  private trackList: string[];

  constructor() {
    super();
    this.seekFolders = [path.join(os.homedir(), "Music")];
    this.supportedFormats = ["mp3", "mp4", "m4a/aac", "m4a", "aac", "flac", "wav", "ogg", "3gpp"];
    this.trackList = [];
  }
  async load(): Promise<void> {
    await this.getAllMuse()

  }

  async getAllMuse(): Promise<void> {
    const stack = this.seekFolders;
    let stackIsNotEmpty = stack.length > 0;

    while (stackIsNotEmpty) {
      const directory = stack.pop() as string;
      const content = await fs.readdir(directory);

      for (let fileDirectory of content) {
        fileDirectory = path.join(directory, fileDirectory);
        const isDirectory = (await fs.lstat(fileDirectory)).isDirectory();

        if (isDirectory) {
          stack.push(fileDirectory);
        } else {
          const fileNameExtension = fileDirectory.split(".");
          const fileFormat = fileNameExtension[fileNameExtension.length - 1];

          if (this.supportedFormats.includes(fileFormat)) {
            this.trackList.push(fileDirectory);
          }
        }
      }

      stackIsNotEmpty = stack.length > 0;
    }
  }

  async getMuseMeta(): Promise<MuseMeta[]> {
    const returnVal: MuseMeta[] = [];

    for (const track of this.trackList) {
      const result = await mmd.parseFile(track);
      returnVal.push({
        album: result.common.album || "Unknown",
        albumTrack: result.common.track.no,
        artist: result.common.artist || "Unknown Artist",
        artists: result.common.artists || [],
        cover: result.common.picture,
        duration: result.format.duration,
        genre: result.common.genre || ["Unknown"],
        source: track,
        title: result.common.title || this.getTitleFromSource(track),
        year: result.common.year,
      });
    }

    return returnVal;
  }

  getTitleFromSource = (source: string): string => {
    const brokenSource = source.split("\\");
    const file = brokenSource[brokenSource.length - 1];
    const extensionIndex = file.lastIndexOf(".");
    return file.slice(0, extensionIndex);
  };

  removeFolder(pathToFolder: string): void {
    const pathIndex = this.seekFolders.findIndex((val) => pathToFolder === val);
    const pathInCollection = pathIndex >= 0;

    if (pathInCollection) {
      this.seekFolders = this.seekFolders.slice(0, pathIndex).concat(this.seekFolders.slice(pathIndex + 1));
    }
  }

  addFolder(pathToFolders: string[]): void {
    this.seekFolders = this.seekFolders.concat(pathToFolders);
  }
}

export default MuseLoaderModule;
