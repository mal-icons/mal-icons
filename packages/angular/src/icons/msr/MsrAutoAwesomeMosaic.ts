import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-auto-awesome-mosaic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAutoAwesomeMosaic {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M451-120H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h271v720Zm-60-60v-600H180v600h211Zm120-331v-329h269q24 0 42 18t18 42v269H511Zm60-60h209v-209H571v209Zm-60 451v-331h329v271q0 24-18 42t-42 18H511Zm60-60h209v-211H571v211ZM391-480Zm180-91Zm0 180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAutoAwesomeMosaic;
