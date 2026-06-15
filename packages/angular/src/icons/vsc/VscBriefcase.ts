import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-briefcase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscBriefcase {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 4V2.5C5 1.67 5.67 1 6.5 1H9.5C10.33 1 11 1.67 11 2.5V4H13C14.1 4 15 4.9 15 6V13C15 14.1 14.1 15 13 15H3C1.9 15 1 14.1 1 13V6C1 4.9 1.9 4 3 4H5ZM6 2.5V4H10V2.5C10 2.22 9.78 2 9.5 2H6.5C6.22 2 6 2.22 6 2.5ZM2 9.5V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V9.5C13.58 9.81 13.06 10 12.5 10H9V10.5C9 10.78 8.78 11 8.5 11H7.5C7.22 11 7 10.78 7 10.5V10H3.5C2.94 10 2.42 9.81 2 9.5ZM7 9V8.5C7 8.22 7.22 8 7.5 8H8.5C8.78 8 9 8.22 9 8.5V9H12.5C13.33 9 14 8.33 14 7.5V6C14 5.45 13.55 5 13 5H3C2.45 5 2 5.45 2 6V7.5C2 8.33 2.67 9 3.5 9H7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscBriefcase;
