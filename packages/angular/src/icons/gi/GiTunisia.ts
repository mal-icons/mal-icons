import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tunisia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTunisia {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M165.6 81.82L244 34.67l27.4 6.02 2.6 34.98 39.9-23.06 9.6 21.28-35.7 29.01c-15.8 28.8 10 46.6 35.2 64.6-14.7 27.3-17 58.6-59.7 76.8 2.8 10.2 1 26.3 29.5 23.4 20.4 29.1 28.6 31 48.6 31.1l3.1 52.5c-23.7 34-49.5 39.7-74.9 50.6l10.6 38.4-39.9 47.4-28.4-117.4-38.9-26.9-29.9-46.2-9.5-50 37.9-38.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTunisia;
