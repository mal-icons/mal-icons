import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-urology",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUrology {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M430-120v50q0 12.75-8.68 21.38Q412.65-40 399.83-40 387-40 378.5-48.62T370-70v-50h-14q-22 0-38.5-14T297-170l-20-120q-5-28 13.35-49T337-360h14l19-52q-11 6-24 9t-26 3q-99 0-169.5-66.5T80-630v-60q0-97 70.5-163.5T320-920q45.83 0 77.92 32.12 32.08 32.12 32.08 78Q430-764 397.92-732 365.83-700 320-700h-40q-12 0-21-8.68-9-8.68-9-21.5 0-12.82 8.63-21.32T280-760h40q21.25 0 35.63-14.32Q370-788.65 370-809.82 370-831 355.63-845.5 341.25-860 320-860q-74.25 0-127.12 49T140-690v60q0 72 52.88 121T320-460q21.25 0 35.63-14.32Q370-488.65 370-509.82 370-531 355.63-545.5 341.25-560 320-560h-40q-12 0-21-8.68-9-8.68-9-21.5 0-12.82 8.63-21.32T280-620h40q45.83 0 77.92 32.08Q430-555.83 430-510v150h100v-150q0-45.83 32.08-77.92Q594.17-620 640-620h40q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T680-560h-40q-21.25 0-35.62 14.33Q590-531.35 590-510.17 590-489 604.38-474.5 618.75-460 640-460q74.25 0 127.13-49T820-630v-60q0-72-52.87-121T640-860q-21.25 0-35.62 14.33Q590-831.35 590-810.17 590-789 604.38-774.5 618.75-760 640-760h40q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T680-700h-40q-45.83 0-77.92-32.12-32.08-32.12-32.08-78Q530-856 562.08-888q32.08-32 77.92-32 99 0 169.5 66.5T880-690v60q0 97-70.5 163.5T640-400q-13 0-25.5-3t-24.5-9v52h33q28.29 0 46.65 21Q688-318 683-290l-20 120q-4 22-20.5 36T604-120h-14v50q0 12.75-8.68 21.38Q572.65-40 559.83-40 547-40 538.5-48.62T530-70v-50H430Zm-94-180 20 120h248l20-120H336Zm0 0 20 120-20-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUrology;
