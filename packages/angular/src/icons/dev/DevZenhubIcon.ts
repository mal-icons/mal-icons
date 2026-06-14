import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-zenhub-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevZenhubIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-zenhub-icon-1-a)"}],["path",{"fill":"currentColor","d":"m351.3 424.9 87 88.1a51.4 51.4 0 0 0 72.40.5 51.4 51.4 0 0 0 0.5-72.5l-88.6-89.7h-71.3zM248.7 175.1l-87-88.1a51.4 51.4 0 0 0-72.4-0.5 51.4 51.4 0 0 0-0.5 72.5l88.6 89.7h71.3z"}],["path",{"fill":"currentColor","d":"M177.4 248.7H51.3a51.4 51.4 0 0 0 0 102.6h125l51.4-51.5zm371.3 0h-125l-51.4 51.5 50.3 51h126.1c28.2 0 51.3-23 51.3-51.2s-23-51.3-51.3-51.3"}],["path",{"fill":"currentColor","d":"M176.2 351.3 88 439.6a51.3 51.3 0 0 0 72.5 72.5l88.3-88.3v-72.5zm247.5-102.6 88.4-88.3a51.3 51.3 0 0 0-72.5-72.5l-88.3 88.3v72.5z"}],["path",{"fill":"currentColor","d":"M351.3 176.3v-125a51.4 51.4 0 0 0-102.6 0V175l51.5 52.2zM248.7 423.8v125a51.4 51.4 0 0 0 102.6-0.1V425l-51.5-52.2z"}],["path",{"fill":"currentColor","d":"M248.7 278.8v-30h-71.3l50.3 51zm102.6 42.4v30h71.3l-50.3-51z"}],["path",{"fill":"currentColor","d":"m351.3 279 21 21.2 51.4-51.5h-72.4zm-102.6 42-21-21.2-51.5 51.5h72.5z"}],["path",{"fill":"currentColor","d":"m351.3 321.2 21-21-21-21.2zm-123.6-21.4 21 21.2v-42.2z"}],["path",{"fill":"currentColor","d":"m321.2 351.3-21.4 21.4 51.5 52.2v-73.6zm-42.4-102.6 21.4-21.4-51.5-52.2v73.6z"}],["path",{"fill":"currentColor","d":"M351.3 351.3v-30l-30 30zM248.7 248.7v30l30-30z"}],["path",{"fill":"currentColor","d":"M321.4 248.7h29.9v-72.4l-51 51zm-42.8 102.6h-29.9v72.5l51-51z"}],["path",{"fill":"currentColor","d":"m299.8 372.7 21.4-21.4h-42.6zm0.4-145.4-21.4 21.4h42.6z"}],["path",{"fill":"currentColor","d":"M351.3 248.7h-29.9l29.9 30.3zM248.7 351.3h29.9L248.7 321z"}],["path",{"fill":"currentColor","d":"M321.4 248.7h-42.6l-30 30V321l29.8 30.3h42.6l30-30V279z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevZenhubIcon;
