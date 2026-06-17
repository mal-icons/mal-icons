import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bulgaria",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBulgaria {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M49.66 101.8l40.48 16.1-11.03 28.4 185.19 11.6 95.3-47.1L483 150.1l5 40.1-38.9 3.3-8.9 63.9S405.5 281 408.9 281c3.5 0 44.5 44.9 44.5 44.9l-40.8 16.5-15.4-17.5-89 39.3 5.6 30.4-72.1 15.6-59.9-34.4-121 21.2 3.25-67.5-40.03-25.6 15.44-63.3 41.15-31.8-50.44-54.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBulgaria;
