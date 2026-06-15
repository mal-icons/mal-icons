import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-envolope",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlEnvolope {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1023.46 232a31.63 31.63 0 0 0-2.48-18.27C1012.92 178.29 987.3 160 944.01 160h-832c-38.08 0-79.1 14-99.28 41.47-1.74 1.33-3.41 2.83-4.91 4.58-6.45 7.44-8.7 17.01-7.26 26.03-0.29 2.59-0.54 5.2-0.54 7.92v512c0 53.02 58.99 112 112 112h832c53.02 0 80-58.98 80-112v-512c0-2.83-0.37-5.31-0.54-8zm-911.46-8l8320h0.43L512 568.66 81.31 225.41C91.11 223.6 103.15 224 112 224zm832 576H112c-17.65 0-48-30.34-48-48V293.55l427.04 341.65c6.02 5.2 13.49 7.79 20.96 7.79a32.05 32.05 0 0 0 20.98-7.79l427.02-341.63v458.43c0 17.66 1.66 48-16 48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlEnvolope;
