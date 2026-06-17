import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-music-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkMusicFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.29 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.71A1 1 0 0 0 13.71 4L10 0.29A1 1 0 0 0 9.29 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 6.64v1.75l-2 0.5v3.61c0 0.5-0.30.88-0.66 1.12C7.97 13.87 7.5 14 7 14s-0.97-0.13-1.34-0.38C5.3 13.38 5 13 5 12.5s0.3-0.880.66-1.12C6.03 11.13 6.5 11 7 11c0.36 0 0.70.07 1 0.2V6.89a1 1 0 0 1 0.76-0.97l1-0.25A1 1 0 0 1 11 6.64"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkMusicFill;
