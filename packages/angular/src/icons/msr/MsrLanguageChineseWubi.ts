import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-language-chinese-wubi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLanguageChineseWubi {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M241-298h180v-176H277q-8 44.39-16.5 87.69Q252-343 241-298Zm287 38H99q-7.92 0-13.46-5.56Q80-271.12 80-279.06t5.54-13.44Q91.08-298 99-298h98q11-45 20-88.5t17-87.5h-81q-8 0-14-6t-6-14q0-8 6-14t14-6h88.78Q247-544 252.5-574q5.5-30 10.5-61H133q-7.92 0-13.46-5.56-5.54-5.56-5.54-13.5t5.54-13.44Q125.08-673 133-673h356q7.92 0 13.46 5.56 5.54 5.56 5.54 13.5t-5.54 13.44Q496.92-635 489-635H307.11Q302-605 296-575t-11 61h144q12.75 0 21.38 8.63T459-484v186h69q7.92 0 13.46 5.56 5.54 5.56 5.54 13.5t-5.54 13.44Q535.92-260 528-260Zm176-60q32.49 0 63.25-15T824-377.51V-499q-29 4-51 8.5T731-480q-50 15.78-75 39.46-25 23.67-25 55.24Q631-356 650.91-338q19.91 18 53.09 18Zm-14 51q-54 0-86.5-31T571-383q0-50 34-83.5T709.72-520Q732-526 760.5-531.5T824-542q0-56-18.5-82.5T739-651q-22 0-44 6.5T644-622q-10 5-19.85 2.67Q614.3-621.67 609-631q-5-10-2.5-20t12.5-15q31-17 64.5-27t67.5-10q69 0 101 42.5T884-540v237q0 10.61-7.08 17.8-7.08 7.2-17.51 7.2h-3.73q-9.69 0-16.19-6.5T831-300l-3-27q-30 28-66.5 43T690-269Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLanguageChineseWubi;
