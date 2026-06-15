import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrow-left-o",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowLeftO {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.95 14.83L10.53 16.24L6.29 12L10.53 7.76L11.95 9.17L10.12 11H17.66V13H10.12L11.95 14.83Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.22 19.78C-0.07 15.48 -0.07 8.52 4.22 4.22C8.52 -0.07 15.48 -0.07 19.78 4.22C24.07 8.52 24.07 15.48 19.78 19.78C15.48 24.07 8.52 24.07 4.22 19.78ZM5.64 18.36C2.12 14.85 2.12 9.15 5.64 5.64C9.15 2.12 14.85 2.12 18.36 5.64C21.88 9.15 21.88 14.85 18.36 18.36C14.85 21.88 9.15 21.88 5.64 18.36Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowLeftO;
