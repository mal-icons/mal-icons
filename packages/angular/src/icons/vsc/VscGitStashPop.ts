import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-git-stash-pop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGitStashPop {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.5 8C5.78 8 6 8.22 6 8.5C6 9.6 6.9 10.5 8 10.5C9.1 10.5 10 9.6 10 8.5C10 8.22 10.22 8 10.5 8H14.5C14.78 8 15 8.22 15 8.5V12.5C15 13.88 13.88 15 12.5 15H3.5C2.12 15 1 13.88 1 12.5V8.5C1 8.22 1.22 8 1.5 8H5.5ZM2 9V12.5C2 13.33 2.67 14 3.5 14H12.5C13.33 14 14 13.33 14 12.5V9H10.96C10.72 10.42 9.48 11.5 8 11.5C6.52 11.5 5.28 10.42 5.04 9H2Z"}],["path",{"d":"M7.65 1.15C7.84 0.95 8.16 0.95 8.35 1.15L10.35 3.15C10.55 3.34 10.55 3.66 10.35 3.85C10.26 3.95 10.13 4 10 4C9.87 4 9.74 3.95 9.65 3.85L8.5 2.71V7.5C8.5 7.78 8.28 8 8 8C7.72 8 7.5 7.78 7.5 7.5V2.71L6.35 3.85C6.16 4.05 5.84 4.05 5.65 3.85C5.45 3.66 5.45 3.34 5.65 3.15L7.65 1.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGitStashPop;
