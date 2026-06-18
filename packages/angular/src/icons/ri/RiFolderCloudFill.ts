import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folder-cloud-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFolderCloudFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4C2 3.45 2.45 3 3 3H10.41L12.41 5H21C21.55 5 22 5.45 22 6V12.36C21 10.94 19.35 10 17.5 10C14.9 10 12.7 11.85 12.14 14.28C10.85 15.13 10 16.59 10 18.25C10 19.27 10.32 20.22 10.88 21H3C2.45 21 2 20.55 2 20V4ZM14 15.6C12.85 15.93 12 16.99 12 18.25C12 19.77 13.23 21 14.75 21H20.25C21.77 21 23 19.77 23 18.25C23 16.99 22.15 15.93 21 15.6C21.05 13.66 19.45 12 17.5 12C15.55 12 13.95 13.66 14 15.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFolderCloudFill;
