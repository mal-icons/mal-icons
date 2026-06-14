import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-vueuse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevVueuse {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M462.9 0v321.9a162.9 162.9 0 1 1-325.8 0V0h115.3v321.9a47.6 47.6 0 1 0 95.2 0V0z"}],["path",{"fill":"currentColor","d":"M578.1 0v321.9a278.1 278.1 0 1 1-556.2 0V0h115.2v321.9a162.9 162.9 0 1 0 325.8 0V0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevVueuse;
