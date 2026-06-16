import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-description",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDescription {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M349-250h262q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T611-310H349q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T349-250Zm0-170h262q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T611-480H349q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T349-420ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h336q12.44 0 23.72 5T599-862l183 183q8 8 13 19.28 5 11.28 5 23.72v496q0 24-18 42t-42 18H220Zm331-584v-156H220v680h520v-494H581q-12.75 0-21.37-8.62T551-664ZM220-820v186-186 680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDescription;
