import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-g-translate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGTranslate {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m481-80-41-120H160q-35 0-57.5-22.5T80-280v-520q0-35 22.5-57.5T160-880h240l35 119.4h365q35 0 57.5 22.39Q880-715.82 880-681v521q0 35-22.44 57.5T800.2-80H481ZM286.7-376Q356-376 400-420.78T444-537v-15.5q0-6.5-2.01-11.5H283v61h90q-8 28.95-30.5 44.98Q320-442 288-442q-39 0-67-28.29-28-28.29-28-69.71t28-69.71Q249-638 287.74-638q17.88 0 33.78 6.5 15.89 6.5 28.81 19.5L399-658q-20-22-50-34t-62-12q-68 0-115.5 48T124-540q0 68 47.71 116 47.71 48 115 48Zm267.7 19L577-378q-14-17-26-32.5T528-444l26.41 87Zm49.79-51q28.36-33 43.05-63 14.69-30 19.75-47H508l11 43h40q8 14.7 19 31.85Q589-426 604.2-408ZM521-120h279q17 0 28.5-11.52 11.5-11.52 11.5-28.55V-681q0-17-11.5-28.5T800-721H448l46 163h79v-43h41v43h147v40h-52q-9 38-29 74.15-20 36.15-47 67.28l109 107.45L713-240 604-348l-36 36 33 112-80 80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGTranslate;
