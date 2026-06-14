import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-mixcloud",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabMixcloud {
  readonly viewBox = "0 0 640 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M212.98 346.57H179.79V195.11L185.97 173.47H175.26L137.13 346.57H76.11L37.73 173.47H27.28L33.19 195.11V346.57H0V165H65.65L102.25 338.1H110.75L147.33 165H212.98L212.98 346.57ZM544.46 283.59L458.43 345.66V307.53L531.33 255.78L458.43 204.02V165.9L544.46 228.23H553.72L640 165.9V204.02L566.87 255.78L640 307.55V345.66L553.72 283.59H544.46ZM430.16 272.31H248.11V239.26H430.16V272.31Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabMixcloud;
