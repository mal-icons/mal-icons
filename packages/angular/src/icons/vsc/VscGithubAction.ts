import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-github-action",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGithubAction {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.09 11L8.07 11.06C7.97 11.37 7.99 11.7 8.1 12H4C2.9 12 2 11.1 2 10V5C2 3.9 2.9 3 4 3H12C13.1 3 14 3.9 14 5V6.02C13.98 6.01 13.96 6.01 13.95 6.01C13.92 6 13.9 6 13.88 6H13V5C13 4.45 12.55 4 12 4H4C3.45 4 3 4.45 3 5V10C3 10.55 3.45 11 4 11H8.09Z"}],["path",{"d":"M4.5 8C4.22 8 4 7.78 4 7.5C4 7.22 4.22 7 4.5 7H9.35C9.34 7.01 9.34 7.02 9.33 7.03C9.33 7.03 9.32 7.04 9.32 7.05L9.02 8H4.5Z"}],["path",{"d":"M4 9.5C4 9.78 4.22 10 4.5 10H8.4L8.71 9H4.5C4.22 9 4 9.22 4 9.5Z"}],["path",{"d":"M14.88 10C15.07 10 15.24 10.11 15.33 10.28C15.41 10.46 15.39 10.66 15.27 10.81L11.41 15.63C11.22 15.86 10.94 16 10.64 16C10.33 16 10.04 15.86 9.86 15.61C9.67 15.36 9.61 15.05 9.69 14.75L10.47 12H9.5C9.34 12 9.19 11.92 9.1 11.8C9 11.67 8.98 11.5 9.02 11.35L10.27 7.35C10.34 7.14 10.53 7 10.75 7H13.88C14.04 7 14.19 7.08 14.29 7.22C14.38 7.35 14.4 7.52 14.34 7.68L13.47 10H14.88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGithubAction;
