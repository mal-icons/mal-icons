import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-laser-burst",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLaserBurst {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M291.17 299.25l109.09 150.17-21.76 15.79-109.07-150.16v72.14h-26.86V315.05l-109.07 150.16-21.74-15.79 109.07-150.16-68.6 22.29-8.31-25.55 68.6-22.29L36 216.35l8.31-25.56 176.53 57.36-42.4-58.36 21.69-15.78 42.45 58.36V46.79h26.86v185.58l42.45-58.36 21.74 15.8-42.4 58.36 176.48-57.38L476 216.34 299.47 273.71l68.6 22.29-8.31 25.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLaserBurst;
