import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-dermatology",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDermatology {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-120q-12.75 0-21.37-8.62T80-150v-350q0-24.75 17.63-42.37T140-560h190q5.88 0 11.4 2.29 5.52 2.29 9.56 6.5Q355-547 357.5-541.46 360-535.91 360-530v50q0 50 35 85t85 35q50 0 85-35t35-85v-50q0-5.88 2.29-11.4 2.29-5.51 6.5-9.56Q613-555 618.54-557.5 624.09-560 630-560h190q24.75 0 42.38 17.63T880-500v350q0 12.75-8.62 21.38T850-120H110Zm30-60h680v-320H660v20q0 74.7-52.71 127.35Q554.58-300 479.79-300T352.5-352.65Q300-405.3 300-480v-20H140v320Zm339.83-280Q467-460 458.5-468.62T450-490q0-107 24.5-210T580-872q10-8 21.91-6.97Q613.81-877.94 622-869q8 10 7.5 22T619-827q-72 60-90.5 151.31Q510-584.38 510-490q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM230-340q13 0 21.5-8.5T260-370q0-13-8.5-21.5T230-400q-13 0-21.5 8.5T200-370q0 13 8.5 21.5T230-340Zm40 100q13 0 21.5-8.5T300-270q0-13-8.5-21.5T270-300q-13 0-21.5 8.5T240-270q0 13 8.5 21.5T270-240Zm460-100q13 0 21.5-8.5T760-370q0-13-8.5-21.5T730-400q-13 0-21.5 8.5T700-370q0 13 8.5 21.5T730-340ZM140-180h680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDermatology;
