import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-git-pull-request-done",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGitPullRequestDone {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.5 7C13.99 7 16 9.02 16 11.5C16 13.99 13.99 16 11.5 16C9.02 16 7 13.99 7 11.5C7 9.02 9.02 7 11.5 7ZM13.85 10.15C13.66 9.95 13.34 9.95 13.15 10.15L11 12.29L9.85 11.15C9.66 10.95 9.34 10.95 9.15 11.15C8.95 11.34 8.95 11.66 9.15 11.85L10.65 13.35C10.84 13.55 11.16 13.55 11.35 13.35L13.85 10.85C14.05 10.66 14.05 10.34 13.85 10.15Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 1C4.88 1 6 2.12 6 3.5C6 4.71 5.14 5.72 4 5.95V10.05C5.14 10.28 6 11.29 6 12.5C6 13.88 4.88 15 3.5 15C2.12 15 1 13.88 1 12.5C1 11.29 1.86 10.28 3 10.05V5.95C1.86 5.72 1 4.71 1 3.5C1 2.12 2.12 1 3.5 1ZM3.5 11C2.67 11 2 11.67 2 12.5C2 13.33 2.67 14 3.5 14C4.33 14 5 13.33 5 12.5C5 11.67 4.33 11 3.5 11ZM3.5 2C2.67 2 2 2.67 2 3.5C2 4.33 2.67 5 3.5 5C4.33 5 5 4.33 5 3.5C5 2.67 4.33 2 3.5 2Z"}],["path",{"d":"M9.15 1.15C9.34 0.95 9.66 0.95 9.85 1.15C10.05 1.34 10.05 1.66 9.85 1.85L8.71 3H10.5C11.88 3 13 4.12 13 5.5V6.21C12.68 6.12 12.34 6.06 12 6.03V5.5C12 4.67 11.33 4 10.5 4H8.71L9.85 5.15C10.05 5.34 10.05 5.66 9.85 5.85C9.66 6.05 9.34 6.05 9.15 5.85L7.15 3.85C6.95 3.66 6.95 3.34 7.15 3.15L9.15 1.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGitPullRequestDone;
