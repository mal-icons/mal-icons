import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tower-bridge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTowerBridge {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M112 43.89L97.42 93.46 73 79.51V135h23v-16h32v16h23V79.51l-24.42 13.96L112 43.89zm288 0l-14.58 49.58L361 79.51V135h23v-16h32v16h23V79.51l-24.42 13.96L400 43.89zM73 153v270h78V153H73zm288 0v270h78V153h-78zM96 183h32v36H96v-36zm73 0v18h174v-18H169zm215 0h32v34h-32v-34zM55 218.08c-11.03 17.62-25.57 34.48-39 50.2v27.04c13.07-14 27.55-29.07 39-44.97v-32.26zm402 0v32.26c11.45 15.9 25.93 30.97 39 44.98v-27.03c-13.43-15.72-27.97-32.58-39-50.2zM96 247h32v18H96v-18zm288 0h32v18h-32v-18zM96 311h32v18H96v-18zm288 0h32v18h-32v-18zM16 375v18h39v-18H16zm80 0h32v18H96v-18zm73 0v18h58.47c-22.31 3.12-42 9.61-58.47 17.23V423h16v0.27C204.8 415.18 228.99 409 256 409c27.01 0 51.2 6.18 71 14.27V423h16v-12.77c-16.47-7.61-36.16-14.11-58.47-17.23H343v-18H169zm215 0h32v18h-32v-18zm73 0v18h39v-18h-39zM57 441v46h110v-46H57zm288 0v46h110v-46H345z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTowerBridge;
