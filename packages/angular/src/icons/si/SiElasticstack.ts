import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-elasticstack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiElasticstack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.88 0C0.84 0 0 0.84 0 1.88v4.79h24V1.88C24 0.84 23.16 0 22.13 0zM0 8.89v6.22h24V8.89zm0 8.44v4.79C0 23.160.84 24 1.88 24h9v-6.67zm13.13 0V24h9C23.16 24 24 23.16 24 22.13v-4.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiElasticstack;
