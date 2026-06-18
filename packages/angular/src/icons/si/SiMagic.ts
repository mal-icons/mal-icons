import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-magic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMagic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a29.66 29.66 0 0 1-3.61 3.53A27.33 27.33 0 0 1 9.73 12c0 2.95-0.47 5.79-1.34 8.47A29.66 29.66 0 0 1 12 24a29.66 29.66 0 0 1 3.61-3.53 27.33 27.33 0 0 1-1.34-8.47c0-2.950.47-5.79 1.34-8.47A29.66 29.66 0 0 1 12 0Zm6.11 5.38A27.36 27.36 0 0 0 17.3 12c0 2.280.28 4.490.81 6.62a30.7 30.7 0 0 1 4.39-2.42A13.66 13.66 0 0 1 21.84 12c0-1.460.23-2.870.66-4.19a30.7 30.7 0 0 1-4.39-2.42Zm-12.22 0A30.7 30.7 0 0 1 1.5 7.81c0.43 1.330.66 2.740.66 4.2 0 1.46-0.23 2.87-0.66 4.2a30.7 30.7 0 0 1 4.39 2.42C6.42 16.49 6.7 14.28 6.7 12c0-2.28-0.28-4.49-0.81-6.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMagic;
