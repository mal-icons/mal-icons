import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-camera-lens-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCameraLensLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.86 19.71L12 16H5.07C6.11 17.79 7.82 19.14 9.86 19.71ZM4.25 14H8.54L5.07 8C4.39 9.18 4 10.54 4 12C4 12.69 4.09 13.36 4.25 14ZM6.39 6.29L8.54 10L12 4C9.82 4 7.84 4.87 6.39 6.29ZM14.14 4.29L12 8H18.93C17.89 6.21 16.18 4.86 14.14 4.29ZM19.75 10H15.46L18.93 16C19.61 14.82 20 13.46 20 12C20 11.31 19.91 10.64 19.75 10ZM17.61 17.71L15.46 14L12 20C14.18 20 16.16 19.13 17.61 17.71ZM12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM13.15 10H10.85L9.69 12L10.85 14H13.15L14.31 12L13.15 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCameraLensLine;
