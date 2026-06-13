import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-wine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoWine {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M414.56,94.92V80a16,16,0,0,0-16-16H113.44a16,16,0,0,0-16,16V94.92c-1.46,11.37-9.65,90.74,36.93,144.69,24.87,28.8,60.36,44.85,105.63,47.86V416H160a16,16,0,0,0,0,32H352a16,16,0,0,0,0-32H272V287.47c45.27-3,80.76-19.06,105.63-47.86C424.21,185.66,416,106.29,414.56,94.92Zm-285.3,3.41a15.14,15.14,0,0,0,0.18-2.33H382.56a15.14,15.14,0,0,0,0.18,2.33,201.91,201.91,0,0,1,0,45.67H129.32A204.29,204.29,0,0,1,129.26,98.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoWine;
