import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-format-overline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFormatOverline {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-780v-60h560v60H200Zm280 660q-117 0-198.5-81.5T200-400q0-117 81.5-198.5T480-680q117 0 198.5 81.5T760-400q0 117-81.5 198.5T480-120Zm-0.23-80Q563-200 621.5-258.26q58.5-58.26 58.5-141.5Q680-483 621.74-541.5q-58.26-58.5-141.5-58.5Q397-600 338.5-541.73q-58.5 58.26-58.5 141.5Q280-317 338.27-258.5q58.26 58.5 141.5 58.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFormatOverline;
