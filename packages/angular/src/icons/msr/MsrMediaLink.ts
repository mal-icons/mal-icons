import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-media-link",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMediaLink {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m425-272-88 55q-8 5-15.50.7Q314-220.61 314-230v-110q0-9.39 7.5-13.7Q329-358 337-353l88 55q7 4.5 7 12.75T425-272Zm95-313q-45.83 0-77.92-32.12-32.08-32.12-32.08-78Q410-741 442.08-773q32.08-32 77.92-32h20q8 0 14 6t6 14q0 8-6 14t-14 6h-20q-29.17 0-49.58 20.38Q450-724.23 450-695.12 450-666 470.42-645.5 490.83-625 520-625h20q8 0 14 6t6 14q0 8-6 14t-14 6h-20Zm160 0h-20q-8 0-14-6t-6-14q0-8 6-14t14-6h20q29.17 0 49.58-20.38Q750-665.76 750-694.88 750-724 729.58-744.5 709.17-765 680-765h-20q-8 0-14-6t-6-14q0-8 6-14t14-6h20q45.83 0 77.92 32.12 32.08 32.12 32.08 78Q790-649 757.92-617 725.83-585 680-585Zm-30-90H550q-8 0-14-6t-6-14q0-8 6-14t14-6h100q8 0 14 6t6 14q0 8-6 14t-14 6Zm3 265v-80h207v-370H340v370h-60v-370q0-24.75 17.63-42.37T340-920h520q24.75 0 42.38 17.63T920-860v390q0 24.75-17.62 42.38T860-410H653ZM100-40q-24.75 0-42.37-17.62T40-100v-370q0-24.75 17.63-42.37T100-530h520q24.75 0 42.38 17.63T680-470v370q0 24.75-17.62 42.38T620-40H100Zm0-60h520v-370H100v370Zm500-575ZM360-285Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMediaLink;
