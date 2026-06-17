import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-battery-pack-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBatteryPackAlt {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M226 16c-24.93 0-45 13.38-45 30v15h-45c-29.55 0-60 30.45-60 60v315c0 29.55 30.45 60 60 60h240c29.55 0 60-30.45 60-60V121c0-29.55-30.45-60-60-60h-45V46c0-16.62-20.07-30-45-30h-60zm-90 105h240v315H136V121zm120 30v105h-75l75 150V301h75l-75-150z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBatteryPackAlt;
