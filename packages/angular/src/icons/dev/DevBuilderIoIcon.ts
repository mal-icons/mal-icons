import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-builder-io-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBuilderIoIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M562.4 168.7A169 169 0 0 1 499.8 300L49.5 44.3q-2.6-1.5-4.7-3.5A23.8 23.8 0 0 1 61.4 0h332.3a168.6 168.6 0 0 1 168.7 168.7"}],["path",{"fill":"currentColor","d":"M562.4 431.2A169 169 0 0 1 393.7 600H61.4a23.8 23.8 0 0 1-11.9-44.3L226.7 455l273-155a169 169 0 0 1 62.7 131.1"}],["path",{"fill":"currentColor","d":"m499.8 300-273 155L49.4 555.8Q47 557 45 559a371 371 0 0 0 105-259A371 371 0 0 0 44.9 40.8q2.1 2 4.8 3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBuilderIoIcon;
