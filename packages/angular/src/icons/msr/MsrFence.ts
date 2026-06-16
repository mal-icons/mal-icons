import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fence",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFence {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-160q-12.75 0-21.37-8.62T210-190v-140h-60q-12 0-21-8.62T120-360q0-12.75 8.5-21.37T150-390h60v-100h-60q-12 0-21-8.62T120-520q0-12.75 8.5-21.37T150-550h60v-127q0-5.91 2-11.46Q214-694 219-699l80-80q9-9 21-9t21 9l59 59 59-59q9.07-9 21.53-9Q493-788 502-779l59 59 58-59q9.07-9 21.53-9Q653-788 662-779l80 80q5 5 7 10.54 2 5.54 2 11.46v127h59q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-490h-59v100h59q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-330h-59v140q0 12.75-8.62 21.38T721-160H240Zm30-390h100v-115l-50-50-50 50v115Zm160 0h100v-115l-50-50-50 50v115Zm161 0h99v-115l-50-50-49 49v116ZM270-390h100v-100H270v100Zm160 0h100v-100H430v100Zm161 0h99v-100h-99v100ZM270-220h100v-110H270v110Zm160 0h100v-110H430v110Zm161 0h99v-110h-99v110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFence;
