import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-browser",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBrowser {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 8C4.55 8 5 7.55 5 7C5 6.45 4.55 6 4 6C3.45 6 3 6.45 3 7C3 7.55 3.45 8 4 8Z","fill":"currentColor"}],["path",{"d":"M8 7C8 7.55 7.55 8 7 8C6.45 8 6 7.55 6 7C6 6.45 6.45 6 7 6C7.55 6 8 6.45 8 7Z","fill":"currentColor"}],["path",{"d":"M10 8C10.55 8 11 7.55 11 7C11 6.45 10.55 6 10 6C9.45 6 9 6.45 9 7C9 7.55 9.45 8 10 8Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 3C1.34 3 0 4.34 0 6V18C0 19.66 1.34 21 3 21H21C22.66 21 24 19.66 24 18V6C24 4.34 22.66 3 21 3H3ZM21 5H3C2.45 5 2 5.45 2 6V9H22V6C22 5.45 21.55 5 21 5ZM2 18V11H22V18C22 18.55 21.55 19 21 19H3C2.45 19 2 18.55 2 18Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBrowser;
