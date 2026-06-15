import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-close",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgClose {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.23 4.81C5.83 4.42 5.2 4.42 4.81 4.81C4.42 5.2 4.42 5.83 4.81 6.23L10.59 12L4.81 17.77C4.42 18.17 4.42 18.8 4.81 19.19C5.2 19.58 5.83 19.58 6.23 19.19L12 13.41L17.77 19.19C18.17 19.58 18.8 19.58 19.19 19.19C19.58 18.8 19.58 18.17 19.19 17.77L13.41 12L19.19 6.23C19.58 5.83 19.58 5.2 19.19 4.81C18.8 4.42 18.17 4.42 17.77 4.81L12 10.59L6.23 4.81Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgClose;
