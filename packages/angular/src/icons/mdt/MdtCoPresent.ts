import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-co-present",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCoPresent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"9","cy":"10","r":"2","opacity":".3"}],["path",{"d":"M14.48 18.34C13.29 17.73 11.37 17 9 17c-2.37 0-4.290.73-5.48 1.34-0.620.32-0.520.94-0.52 1.66h12c0-0.710.11-1.34-0.52-1.66z","opacity":".3"}],["path",{"d":"M21 3H3c-1.1 0-2 0.9-2 2v8h2V5h18v16c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2z"}],["path",{"d":"M13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-6 0c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm8.39 6.56C13.71 15.7 11.53 15 9 15s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-0.61-2.15-1.61-2.66zM15 20H3c0-0.72-0.1-1.340.52-1.66C4.71 17.73 6.63 17 9 17c2.37 0 4.290.73 5.48 1.340.630.320.520.950.52 1.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCoPresent;
