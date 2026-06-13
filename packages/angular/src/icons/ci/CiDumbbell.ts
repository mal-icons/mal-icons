import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-dumbbell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiDumbbell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.44,11.5h-0.38V8.12a1.63,1.63,0,0,0-1.62-1.62h-0.63V6.12a1.63,1.63,0,0,0-3.25,0V11.5H8.45V6.12a1.63,1.63,0,0,0-3.25,0V6.5h-0.63a1.62,1.62,0,0,0-1.62,1.62V11.5h-0.38a0.50.5,0,1,0,0,1h0.38v3.37a1.62,1.62,0,0,0,1.62,1.63H5.2v0.37a1.63,1.63,0,1,0,3.25,0V12.5h7.11v5.37a1.63,1.63,0,1,0,3.25,0V17.5h0.63a1.63,1.63,0,0,0,1.62-1.63V12.5h0.38a0.50.5,0,1,0,0-1ZM5.2,16.5h-0.63a0.630.63,0,0,1-0.62-0.63V8.12a0.620.62,0,0,1,0.62-0.62H5.2Zm2.25,1.37a0.630.63,0,0,1-0.630.630.630.63,0,0,1-0.62-0.63V6.12a0.620.62,0,0,1,0.62-0.620.630.63,0,0,1,0.630.62Zm10.36,0a0.630.63,0,1,1-1.25,0V6.12a0.630.63,0,0,1,1.25,0Zm2.25-2a0.630.63,0,0,1-0.620.63h-0.63v-9h0.63a0.620.62,0,0,1,0.620.62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiDumbbell;
