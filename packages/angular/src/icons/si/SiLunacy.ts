import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-lunacy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLunacy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.03 6h-6v12h12v-6l-6 6Zm6.56 2.31a4.01 4.01 0 0 1-2.37-2.37 4.03 4.03 0 0 1-2.37 2.38 4.04 4.04 0 0 1 2.38 2.38 4.01 4.01 0 0 1 2.37-2.37ZM0 9.6c0-3.36 0-5.040.65-6.32A6.04 6.04 0 0 1 3.280.65C4.56 0 6.24 0 9.6 0h4.8c3.36 0 5.04 0 6.330.65a6.04 6.04 0 0 1 2.63 2.63C24 4.56 24 6.24 24 9.6v4.8c0 3.36 0 5.04-0.65 6.33a6.04 6.04 0 0 1-2.62 2.63C19.44 24 17.76 24 14.4 24H9.6c-3.36 0-5.04 0-6.32-0.65a6.04 6.04 0 0 1-2.62-2.62C0 19.44 0 17.76 0 14.4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLunacy;
