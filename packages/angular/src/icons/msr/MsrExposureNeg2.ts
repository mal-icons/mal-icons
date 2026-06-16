import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-exposure-neg-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrExposureNeg2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M526-200q-17 0-29.5-12.5T484-242q0-11 5.5-25t13.5-22l188-192q34-35 49.5-64t15.5-60q0-42-25-66.5T662-696q-29 0-53 11.5T570-653q-8 11-19.5 15.5T528-638q-15-6-20-20.5t3-26.5q24-35 63.5-55t87.5-20q71 0 115.5 43T822-605q0 41-19 79t-64 83L563-263l2 3h245q13 0 21.5 8.5T840-230q0 13-8.5 21.5T810-200H526ZM150-410q-13 0-21.5-8.5T120-440q0-13 8.5-21.5T150-470h220q13 0 21.5 8.5T400-440q0 13-8.5 21.5T370-410H150Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrExposureNeg2;
