import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-highcharts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHighcharts {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m416.9 295-4.2-7.3-141.4-46.2-4 4.7-6.1 1.4L135.5 541l1.7 9 302.7-127.8 2.5-5.2-21-117.2z"}],["path",{"fill":"currentColor","d":"m137.2 550 130-303.8L0 159z"}],["path",{"fill":"currentColor","d":"m366.5 15-99.2 231.2L416.9 295l0.7-2-50.2-275.9z"}],["path",{"fill":"currentColor","d":"m416.9 295 23 127.3 10.5-0.3 143.3-62 6.3-5.5-7.5-6.3-168.6-56.8z"}],["path",{"fill":"currentColor","d":"M439.9 422.3 469.2 585 600 354.5zM366.5 15l50.4 280L600 354.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHighcharts;
