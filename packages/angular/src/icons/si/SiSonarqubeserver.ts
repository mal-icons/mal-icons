import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-sonarqubeserver",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSonarqubeserver {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a0.770.77 0 0 0-0.770.78c0 0.430.350.780.780.78 5.76 0 10.45 4.69 10.45 10.45 0 0.430.350.780.780.78A0.770.77 0 0 0 24 12c0-6.62-5.38-12-12-12zm0 3.93a0.770.77 0 0 0-0.770.78c0 0.430.350.780.780.78A6.52 6.52 0 0 1 18.52 12c0 0.430.350.780.780.780.43 0 0.78-0.350.78-0.77 0-4.45-3.62-8.07-8.07-8.07zm0 3.93a0.770.77 0 0 0-0.770.78c0 0.430.350.780.780.78A2.6 2.6 0 0 1 14.59 12c0 0.430.350.780.780.780.43 0 0.78-0.350.78-0.77A4.14 4.14 0 0 0 12 7.86zM0.78 11.23A0.770.77 0 0 0 0 12c0 6.62 5.38 12 12 12 0.43 0 0.78-0.350.78-0.77a0.770.77 0 0 0-0.77-0.78C6.24 22.45 1.55 17.76 1.55 12a0.770.77 0 0 0-0.77-0.77zm3.93 0a0.770.77 0 0 0-0.770.78c0 4.45 3.62 8.07 8.07 8.070.43 0 0.78-0.350.78-0.77a0.770.77 0 0 0-0.77-0.77A6.52 6.52 0 0 1 5.48 12a0.770.77 0 0 0-0.77-0.77zm3.93 0a0.770.77 0 0 0-0.780.78A4.14 4.14 0 0 0 12 16.14c0.43 0 0.78-0.350.78-0.78a0.770.77 0 0 0-0.77-0.77A2.6 2.6 0 0 1 9.41 12a0.770.77 0 0 0-0.77-0.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSonarqubeserver;
