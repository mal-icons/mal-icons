import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-sunny-snowing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSunnySnowing {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-420v-60h160v60H40Zm221-207L148-740l42-42 113 113-42 42Zm-21.14 422Q223-205 211.5-216.64t-11.5-28.5Q200-262 211.64-273.5t28.5-11.5Q257-285 268.5-273.36t11.5 28.5Q280-228 268.36-216.5t-28.5 11.5ZM290-420v-30q0-78.85 55.61-134.43Q401.21-640 480.11-640T614.5-584.42Q670-528.85 670-450v30h-60v-30q0-54.17-37.88-92.08-37.88-37.92-92-37.92Q426-580 388-542.08 350-504.17 350-450v30h-60Zm69.86 380Q343-40 331.5-51.64 320-63.28 320-80.14q0-16.86 11.64-28.36t28.5-11.5Q377-120 388.5-108.36q11.5 11.64 11.5 28.5Q400-63 388.36-51.5t-28.5 11.5Zm120-165Q463-205 451.5-216.64t-11.5-28.5Q440-262 451.64-273.5t28.5-11.5Q497-285 508.5-273.36t11.5 28.5Q520-228 508.36-216.5t-28.5 11.5ZM450-730v-160h60v160h-60ZM599.86-40Q583-40 571.5-51.64 560-63.28 560-80.14q0-16.86 11.64-28.36t28.5-11.5Q617-120 628.5-108.36q11.5 11.64 11.5 28.5Q640-63 628.36-51.5t-28.5 11.5ZM698-626l-42-42 114-114 42 42-114 114Zm21.86 421Q703-205 691.5-216.64t-11.5-28.5Q680-262 691.64-273.5t28.5-11.5Q737-285 748.5-273.36t11.5 28.5Q760-228 748.36-216.5t-28.5 11.5ZM760-420v-60h160v60H760Zm-280 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSunnySnowing;
