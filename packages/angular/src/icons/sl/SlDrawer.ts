import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-drawer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlDrawer {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1022.98 509.98L905.48 102.9c-3.84-13.87-16.46-23.47-30.85-23.47H139.28c-14.5 0-27.18 9.74-30.94 23.78L0.95 489.55c-1.98 7.5-1.01 15.01 2 21.54C1.22 516.880 522.910 529.26v351.31c0 35.34 28.66 64 64 64h896c35.34 0 64-28.66 64-64V529.26c0-1.71-0.37-3.33-0.5-5.010.83-4.590.82-9.44-0.53-14.27zm-859.08-366.56l686.370 93.12 321.84H645.05c-1.44 76.82-55.9 129.68-133.06 129.68s-130.62-52.88-132.06-129.68H74.16zm796.1 737.15H64V529.26h263.12c27.94 80.43 95.78 129.68 184.88 129.68s157.94-49.25 185.87-129.68h262.13v351.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlDrawer;
