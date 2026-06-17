import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ermine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiErmine {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 24l-32 64 32 48 32-48-32-64zm-64 96l-64 32 64 32 48-32-48-32zm128 0l-48 32 48 32 64-32-64-32zm-64 32c-32 128-64 192-128 256 16 0 48 0 64-16 0 16-16 48-32 64 16 0 48 0 64-16 16 16 16 16 32 48 16-32 16-32 32-48 16.85 12.06 48 16 64 16-16-16-32-48-32-64 16 16 48 16 64 16-64-64-96-128-128-256z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiErmine;
