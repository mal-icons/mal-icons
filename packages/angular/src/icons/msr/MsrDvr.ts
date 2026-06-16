import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-dvr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDvr {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M279.98-407q14.02 0 23.52-9.48 9.5-9.48 9.5-23.5 0-14.02-9.48-23.52-9.48-9.5-23.5-9.5-14.02 0-23.52 9.48-9.5 9.48-9.5 23.5 0 14.02 9.48 23.52 9.48 9.5 23.5 9.5Zm0-160q14.02 0 23.52-9.48 9.5-9.48 9.5-23.5 0-14.02-9.48-23.52-9.48-9.5-23.5-9.5-14.02 0-23.52 9.48-9.5 9.48-9.5 23.5 0 14.02 9.48 23.52 9.48 9.5 23.5 9.5ZM390-410h300q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T690-470H390q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T390-410Zm0-160h300q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T690-630H390q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T390-570ZM140-200q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v50q0 12.75-8.62 21.38T600-120H360q-12.75 0-21.37-8.62T330-150v-50H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDvr;
