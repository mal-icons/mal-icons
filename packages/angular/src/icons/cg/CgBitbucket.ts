import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-bitbucket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBitbucket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.58 4.64C4.03 4.64 3.67 5.07 3.77 5.62L6.23 18.38C6.33 18.93 6.86 19.36 7.42 19.36H16.58C17.14 19.36 17.67 18.93 17.77 18.38L20.23 5.62C20.33 5.07 19.97 4.64 19.42 4.64H4.58ZM13.54 14.36L14.45 9.64H9.55L10.46 14.36H13.54Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBitbucket;
