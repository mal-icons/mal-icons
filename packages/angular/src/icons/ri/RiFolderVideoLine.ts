import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folder-video-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFolderVideoLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 19V5H9.59L11.59 7H20V19H4ZM21 5H12.41L10.41 3H3C2.45 3 2 3.45 2 4V20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20V6C22 5.45 21.55 5 21 5ZM15 12.67L10.12 9.41C10.06 9.37 9.98 9.35 9.9 9.35C9.68 9.35 9.5 9.53 9.5 9.75V16.25C9.5 16.33 9.52 16.41 9.57 16.47C9.69 16.66 9.94 16.71 10.12 16.59L15 13.33C15.04 13.3 15.08 13.27 15.11 13.22C15.23 13.04 15.18 12.79 15 12.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFolderVideoLine;
