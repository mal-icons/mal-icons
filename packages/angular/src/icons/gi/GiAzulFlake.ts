import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-azul-flake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAzulFlake {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128 16v99.3l119 118.9V120.1L128 16zm256 0L265 120.1v114.1l119-119V16zM16 128l104 119h114.2L115.3 128H16zm380.8 0l-119 119h114.1l104-119h-99.1zM120 265L16 384h99.2l119-119H120zm157.8 0l119 119h99.1l-104-119H277.8zM247 277.8l-119 119V496l119-104.1V277.8zm18 0v114.1L384 496v-99.2l-119-119z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAzulFlake;
