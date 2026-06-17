import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-server-rack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiServerRack {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M41 25v78h430V25H41zm254 23h18v32h-18V48zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zM64 55h48v18H64V55zm80 0h48v18h-48V55zm80 0h48v18h-48V55zm-119 66v30h302v-30H105zm-64 48v78h430v-78H41zm254 23h18v32h-18v-32zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-352 7h48v18H64v-18zm80 0h48v18h-48v-18zm80 0h48v18h-48v-18zm-119 66v30h302v-30H105zm-64 48v78h430v-78H41zm254 23h18v32h-18v-32zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-352 7h48v18H64v-18zm80 0h48v18h-48v-18zm80 0h48v18h-48v-18zm13 66v30h38v-30h-38zM25 457v30h130.2l20-30H25zm171.8 0l-20 30h158.4l-20-30H196.8zm140 0l20 30H487v-30H336.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiServerRack;
