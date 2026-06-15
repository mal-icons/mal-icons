import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-git-compare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGitCompare {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.15 5.85C9.34 6.05 9.66 6.05 9.85 5.85C10.05 5.66 10.05 5.34 9.85 5.15L8.71 4H10.5C11.33 4 12 4.67 12 5.5V10.05C10.86 10.28 10 11.29 10 12.5C10 13.88 11.12 15 12.5 15C13.88 15 15 13.88 15 12.5C15 11.29 14.14 10.28 13 10.05V5.5C13 4.12 11.88 3 10.5 3H8.71L9.85 1.85C10.05 1.66 10.05 1.34 9.85 1.15C9.66 0.95 9.34 0.95 9.15 1.15L7.15 3.15C6.95 3.34 6.95 3.66 7.15 3.85L9.15 5.85ZM14 12.5C14 13.33 13.33 14 12.5 14C11.67 14 11 13.33 11 12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5ZM6 3.5C6 4.71 5.14 5.72 4 5.95V10.5C4 11.33 4.67 12 5.5 12H7.29L6.15 10.85C5.95 10.66 5.95 10.34 6.15 10.15C6.34 9.95 6.66 9.95 6.85 10.15L8.85 12.15C9.05 12.34 9.05 12.66 8.85 12.85L6.85 14.85C6.66 15.05 6.34 15.05 6.15 14.85C5.95 14.66 5.95 14.34 6.15 14.15L7.29 13H5.5C4.12 13 3 11.88 3 10.5V5.95C1.86 5.72 1 4.71 1 3.5C1 2.12 2.12 1 3.5 1C4.88 1 6 2.12 6 3.5ZM5 3.5C5 2.67 4.33 2 3.5 2C2.67 2 2 2.67 2 3.5C2 4.33 2.67 5 3.5 5C4.33 5 5 4.33 5 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGitCompare;
