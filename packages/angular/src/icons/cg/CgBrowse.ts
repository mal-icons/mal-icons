import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-browse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBrowse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.36 13.12C15.29 14.05 15.48 15.42 14.95 16.54L16.49 18.07C16.88 18.46 16.88 19.09 16.49 19.49C16.09 19.88 15.46 19.88 15.07 19.49L13.54 17.95C12.42 18.48 11.05 18.29 10.12 17.36C8.95 16.19 8.95 14.29 10.12 13.12C11.29 11.95 13.19 11.95 14.36 13.12ZM12.95 15.95C13.34 15.56 13.34 14.93 12.95 14.54C12.56 14.15 11.93 14.15 11.54 14.54C11.15 14.93 11.15 15.56 11.54 15.95C11.93 16.34 12.56 16.34 12.95 15.95Z","fill":"currentColor"}],["path",{"d":"M8 5H16V7H8V5Z","fill":"currentColor"}],["path",{"d":"M16 9H8V11H16V9Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 4C4 2.34 5.34 1 7 1H17C18.66 1 20 2.34 20 4V20C20 21.66 18.66 23 17 23H7C5.34 23 4 21.66 4 20V4ZM7 3H17C17.55 3 18 3.45 18 4V20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20V4C6 3.45 6.45 3 7 3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBrowse;
