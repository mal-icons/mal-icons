import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-elasticsearch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevElasticsearch {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-elasticsearch-1-a)"}],["path",{"fill":"currentColor","d":"M33 300c0 26 3.6 51 9.8 75H408a75 75 0 0 0 0-150H42.8c-6.2 24-9.8 49-9.8 75"}],["path",{"fill":"currentColor","d":"M537.8 143.6q15.8-14.4 29.2-31.1a299.3 299.3 0 0 0-503.2 56.3h410c23.8 0 46.6-9 64-25.2"}],["path",{"fill":"currentColor","d":"M473.8 431.3h-410A299.3 299.3 0 0 0 567 487.5a285 285 0 0 0-29.2-31.2 94 94 0 0 0-64-25"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevElasticsearch;
