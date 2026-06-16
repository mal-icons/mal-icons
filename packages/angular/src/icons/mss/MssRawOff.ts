import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-raw-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRawOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M824-56 73-805l43-43L866-98l-42 42Zm-72-304-33-131-35 126-66-66-43-169h49l37 142 34-142h45l37 142 33-142h50l-58 240h-50Zm-406 0 49-179 39 39-8 31h39l48 48H412l-15 61h-51Zm-226 0v-240h144q23 0 35.5 12.5T312-552v63q0 20-12 30.5T271-446l37 86h-50l-32-81h-58v81h-48Zm48-129h96v-63h-96v63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRawOff;
