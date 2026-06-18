import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-taxi-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTaxiFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12V21C22 21.55 21.55 22 21 22H20C19.45 22 19 21.55 19 21V20H5V21C5 21.55 4.55 22 4 22H3C2.45 22 2 21.55 2 21V12L4.48 6.21C4.8 5.48 5.52 5 6.32 5H9V3H15V5H17.68C18.48 5 19.2 5.48 19.52 6.21L22 12ZM4.18 12H19.82L17.68 7H6.32L4.18 12ZM6.5 17C7.33 17 8 16.33 8 15.5C8 14.67 7.33 14 6.5 14C5.67 14 5 14.67 5 15.5C5 16.33 5.67 17 6.5 17ZM17.5 17C18.33 17 19 16.33 19 15.5C19 14.67 18.33 14 17.5 14C16.67 14 16 14.67 16 15.5C16 16.33 16.67 17 17.5 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTaxiFill;
