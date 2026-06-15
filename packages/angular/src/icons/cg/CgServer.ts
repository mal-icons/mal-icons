import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-server",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgServer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 6C8.45 6 8 6.45 8 7C8 7.55 8.45 8 9 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H9Z","fill":"currentColor"}],["path",{"d":"M9 10C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H15C15.55 12 16 11.55 16 11C16 10.45 15.55 10 15 10H9Z","fill":"currentColor"}],["path",{"d":"M13 17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17C11 16.45 11.45 16 12 16C12.55 16 13 16.45 13 17Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 5C4 3.34 5.34 2 7 2H17C18.66 2 20 3.34 20 5V19C20 20.66 18.66 22 17 22H7C5.34 22 4 20.66 4 19V5ZM7 4H17C17.55 4 18 4.45 18 5V19C18 19.55 17.55 20 17 20H7C6.45 20 6 19.55 6 19V5C6 4.45 6.45 4 7 4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgServer;
