import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-klarna",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKlarna {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.59 2v20H0V2h4.59zm11.46 0c0 4.19-1.58 8.11-4.41 11.07l-0.280.28L17.7 22h-5.67l-6.89-9.4 1.78-1.33c2.86-2.14 4.54-5.38 4.64-8.92L11.56 2h4.49zM21.5 17a2.5 2.5 0 110 5 2.5 2.5 0 10-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKlarna;
